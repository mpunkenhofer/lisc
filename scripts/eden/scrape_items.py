import requests
import browser_cookie3
import time
import json


def main(output_fname):
    print('Scraping Eden Item DB...')
    cj = browser_cookie3.firefox(domain_name='eden-daoc.net')

    def uri(p): return f'https://www.eden-daoc.net/itm/search.php?p={p}'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
    }

    # eden item site is paginated ... get all items from one page and go next (page + 1) 
    items = []
    page = 0

    rj = requests.get(uri(page), cookies=cj, headers=headers).json()
    print(f'page: {page}', end='')

    while rj and 'items' in rj and len(rj['items']) > 0:
        items += rj['items']
        page += 1
        print(f'\rpage: {page}', end='')
        rj = requests.get(uri(page), cookies=cj, headers=headers).json()
        time.sleep(0.1)

    print(f'\nScraped {page} pages of items.')

    with open(output_fname, "w") as f:
        print(f'Writing {output_fname} ...')
        json.dump(items, f, indent=4)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description='Gets eden database items.')

    parser.add_argument('-o', '--output', type=str, default='eden_items.json',
                        help='output file name')

    args = parser.parse_args()

    main(args.output)
