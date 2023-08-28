import csv
import requests
import pandas

CSV_URL = 'https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=CZ5B2RZ7IQT1OL6U'

with requests.Session() as s:
    download = s.get(CSV_URL)
    decoded_content = download.content.decode('utf-8')
    cr = csv.reader(decoded_content.splitlines(), delimiter=',')
    my_list = list(cr)
    header=my_list[0]
    my_list=my_list[1:]
    data=pandas.DataFrame(my_list,columns=header)
    data=data[['symbol','name']]
    data.to_csv('./listings.csv')
