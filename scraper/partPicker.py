#!/usr/bin/env python3

from selenium import webdriver


def scrapeInfo():
    opt = webdriver.ChromeOptions()
    opt.add_argument('headless')
    opt.add_argument('--disable-dev-shm-usage')
    opt.add_argument('--no-sandbox')

    url = 'https://pcpartpicker.com/product/9nm323/amd-ryzen-5-3600-36-thz-6-core-processor-100-100000031box'
    driver = './chromedriver'
    browser = webdriver.Chrome(options=opt, executable_path=driver)
    browser.implicitly_wait(3)
    browser.get(url)
    elements = browser.find_elements_by_class_name('group--spec')
    specs = {}
    for item in range(len(elements)):
        key = elements[item].find_elements_by_class_name('group__title')[0].get_attribute('textContent')
        if key:
            specs[key] = elements[item].find_elements_by_class_name('group__content')[0].get_attribute('textContent').strip()
    print(specs)
    browser.quit()

scrapeInfo()
