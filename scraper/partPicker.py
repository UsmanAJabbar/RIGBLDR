#!/usr/bin/env python3

from selenium import webdriver
import json

def scrapeInfo(url):
    opt = webdriver.ChromeOptions()
    opt.add_argument('headless')
    opt.add_argument('--disable-dev-shm-usage')
    opt.add_argument('--no-sandbox')

    driver = './chromedriver'
    browser = webdriver.Chrome(options=opt, executable_path=driver)
    browser.implicitly_wait(3)
    browser.get(url)
    elements = browser.find_elements_by_class_name('table-horizontal')
    specs = {}
    for item in elements:
        group = item.find_elements_by_tag_name('tr')
        for  i in group:
            key = i.find_element_by_tag_name('th').get_attribute("textContent")
            val = i.find_element_by_tag_name('td').get_attribute("textContent")
            specs[key] = val
    file = open('RAM.txt', 'a')
    file.write(json.dumps(specs))
    file.write('\n')
    file.close()
    browser.quit()
