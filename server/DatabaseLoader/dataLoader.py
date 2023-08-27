
import os
import requests
import pandas
import configparser
from alpha_vantage.alpha_vantage.timeseries import TimeSeries
import json

with open('DatabaseLoader/env.json', "r") as json_file:
    key = json.load(json_file)
alphaKey=key['ALPHA_KEY']   

symbol = "AAPL"
function = "TIME_SERIES_DAILY"
interval = "60min"
downloadCSV = "NO"


#Calling Alpha_Vantage API 

def getData(data,alphaKey):
    ts = TimeSeries(key=alphaKey,output_format='pandas')
    print(data.keys())
    if(data['functioncall']=="TIME_SERIES_INTRADAY"):
        data, meta_data = ts.get_intraday(data['symbol'],interval=data['interval'])
        return data,meta_data
    elif(data['functioncall']=="TIME_SERIES_INTRADAY_EXTENDED"):
        data, meta_data = ts.get_intraday_extended(data['symbol'],interval=data['interval'])
        return data,meta_data
    elif(data['functioncall']=="TIME_SERIES_DAILY"):
        data, meta_data = ts.get_daily(data['symbol'])
        return data,meta_data
    # elif(data['functioncall']=="TIME_SERIES_DAILY_ADJUSTED"):
    #     data, meta_data = ts.get_daily_adjusted(data['symbol'])
    #     return data,meta_data
    elif(data['functioncall']=="TIME_SERIES_WEEKLY"):
        data, meta_data = ts.get_weekly(data['symbol'])
        return data,meta_data
    elif(data['functioncall']=="TIME_SERIES_WEEKLY_ADJUSTED"):
        data, meta_data = ts.get_weekly_adjusted(data['symbol'])
        return data,meta_data
    elif(data['functioncall']=="TIME_SERIES_MONTHLY"):
        data, meta_data = ts.get_monthly(data['symbol'])
        return data,meta_data
    elif(data['functioncall']=="TIME_SERIES_MONTHLY_ADJUSTED"):
        data, meta_data = ts.get_monthly_adjusted(data['symbol'])
        return data,meta_data
    
    

    