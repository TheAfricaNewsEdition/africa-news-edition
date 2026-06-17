#!/usr/bin/env python3
"""
Scan every HTML file in news/ and inject

    <script src="../back-link.js"></script>

before </body>, but only when:

  1. The page has an element with class "masthead" (so the script
     actually has something to attach to), AND
  2. The page does not already reference back-link.js.

Idempotent: running it twice changes nothing the second time.
"""

import os
import re
import sys

SCRIPT_TAG = '<script src="../back-link.js"></script>'

# Matches class="...masthead..." or class='...masthead...' where "masthead"
# is a whole token in the class list (so "mastheadx" doesn't match).
MASTHEAD_RE = re.compile(r'''class\s*=\s*["'][^"']*\bmasthead\b[^"']*["']''')

# Matches the closing </body> tag, captures the indent before it
BODY_END_RE = re.compile(r'([ \t]*)</body\s*>', re.IGNORECASE)


def process(path):
    with open(path, 'r', encoding='utf-8') as f:
        src = f.read()

    if 'back-link.js' in src:
        return 'already-wired'

    if not MASTHEAD_RE.search(src):
        return 'no-masthead'

    if not BODY_END_RE.search(src):
        return 'no-body-close'

    new_src = BODY_END_RE.sub(
        lambda m: m.group(1) + SCRIPT_TAG + '\n' + m.group(0),
        src,
        count=1,
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_src)
    return 'injected'


def main():
    root = os.path.join(os.path.dirname(__file__), '..', '..')
    news_dir = os.path.abspath(os.path.join(root, 'news'))

    if not os.path.isdir(news_dir):
        print(f'No news/ directory at {news_dir}, nothing to do.')
        return 0

    summary = {'injected': [], 'already-wired': [], 'no-masthead': [], 'no-body-close': []}

    for name in sorted(os.listdir(news_dir)):
        if not name.lower().endswith('.html'):
            continue
        path = os.path.join(news_dir, name)
        result = process(path)
        summary[result].append(name)

    print('--- back-link injection report ---')
    for key in ('injected', 'already-wired', 'no-masthead', 'no-body-close'):
        if summary[key]:
            print(f'{key} ({len(summary[key])}):')
            for n in summary[key]:
                print(f'  - {n}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
