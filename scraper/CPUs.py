#!/usr/bin/env python3

from selenium import webdriver
from partPicker import scrapeInfo

def getCPUs():
    opt = webdriver.ChromeOptions()
    opt.add_argument('headless')
    opt.add_argument('--disable-dev-shm-usage')
    opt.add_argument('--no-sandbox')

    url = 'https://www.newegg.com/Desktop-Memory/SubCategory/ID-147?Tid=7611'
    driver = './chromedriver'
    browser = webdriver.Chrome(options=opt, executable_path=driver)
    browser.implicitly_wait(3)
    browser.get(url)
    allParts = browser.find_elements_by_class_name('item-title')
    allLinks = []
    for i in allParts:
        singleLink = i.get_attribute('href')
        allLinks.append(singleLink)
        if (singleLink is not None):
            scrapeInfo(singleLink)
    print(allLinks)
    browser.quit()

getCPUs()
