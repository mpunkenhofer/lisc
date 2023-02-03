import requests
import browser_cookie3
import time
import json
import argparse
import sys

# source: https://stackoverflow.com/questions/6169217/replace-console-output-in-python


def progress_bar(value, endvalue, bar_length=20):
    percent = float(value) / endvalue
    arrow = '-' * int(round(percent * bar_length) - 1) + '>'
    spaces = ' ' * (bar_length - len(arrow))

    sys.stdout.write("\rPercent: [{0}] {1}%".format(
        arrow + spaces, int(round(percent * 100))))
    sys.stdout.flush()


def main(items):
    print('Crawling Eden Item DB for details...')
    cj = browser_cookie3.firefox(domain_name='eden-daoc.net')

    def uri(id): return f'https://www.eden-daoc.net/itm/item.php?id={id}'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
    }

    with open(items) as f:
        items = json.load(f)
        total = len(items)

        print(f'Getting the details of {total} items.')

        for idx, item in enumerate(items):
            details = requests.get(
                uri(item['id']), cookies=cj, headers=headers).json()

            if details:
                #print('\ndetails:\n', details)
                merged = {**item, **details}
                items[idx] = merged
            else:
                print('Failed to get item details for item number: {idx}.')
                print('Item:')
                print(item)
                break

            # if idx > 10:
            #     break

            progress_bar(idx, total)

        with open('eden_items_details.json', "w") as f:
            print('\nWriting eden_items_details.json...')
            json.dump(items, f, indent=4)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description='Gets details for eden database items.')

    parser.add_argument('ids', type=str, help='eden item ids (.json)')

    args = parser.parse_args()

    main(args.ids)
