# -*- coding: utf-8 -*-
import scrapy


class SolutionsSpiderSpider(scrapy.Spider):
    name = 'solutions-spider'
    allowed_domains = ['stackoverflow.com']
    start_urls = ['https://stackoverflow.com/questions/tagged/java']
    pages=["java", "javascript", "python", "cPlusPlus", "typescript", "sql"]
    index=0
    def parse(self, response):
        questions=[]
        listings=response.xpath('//div[@class="question-summary"]')
        for listing in listings:
            partial_url=listing.xpath('.//a[@class="question-hyperlink"]/@href').extract_first()
            question=listing.xpath('.//a[@class="question-hyperlink"]/text()').extract_first()
            url=response.urljoin(partial_url)
            description=listing.xpath('.//div[@class="excerpt"]/text()').extract_first().replace('\r\n','')
            views= listing.xpath('.//div[@class="views "]/@title').extract_first()
            user=listing.xpath('.//div[@class="user-details"]/a/text()').extract_first()
            time= listing.xpath('.//span[@class="relativetime"]/text()').extract_first()
            question={
                      'question':question,
                      'url':url,
                      'description':description,
                      'views':views,
                      'user':user,
                      'time':time
                    }
            questions.append(question);
        objName=self.pages[self.index]
        yield {objName:questions}
        self.index+=1
        if self.index < 6:
            pageName="c++" if self.pages[self.index] == "cPlusPlus" else self.pages[self.index]
            next_page_url='https://stackoverflow.com/questions/tagged/'+pageName
            yield scrapy.Request(next_page_url, callback=self.parse)
