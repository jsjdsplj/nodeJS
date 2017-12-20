var http=require('http')
var cheerio=require('cheerio')
var promise=require('bluebird')
var baseURl ='http://www.imooc.com/learn/'
var videoIds=[348,259,197,134,75]

function filterChapters(html){
   var $=cheerio.load(html)
   var chapters=$('.chapter') 
   var title=$('#pafe_header.path span').text()
   var numeber=parseInt($($('.info_num i')[0]).text().trim(),10)
   var courseData=[]
   chapters.each(function(item){
   var chapter=$(this)
   var chapterTitle=chapter.find('strong').text()
   var video =chapter.find('.video').children('li')
   var chapterData={
      chapterTitle:chapterTitle,
      videos:[]
   }
   video.each(function(item){
      var video=$(this).find('.J-media-item')
      var videoTitle=video.text()
      
      var id=video.attr('href').split('video/')[1]

      chapterData.videos.push({
         title:videoTitle,
         id:id
      })
   })

   courseData.push(chapterData)
})
return courseData
}

function printCourseInfo(coursesData){
   coursesData.forEach(function(courseData){
      console.log(courseData.numeber+'people'+courseData.title)
   })
   coursesData.forEach(function(courseData){
      console.log('###'+courseData.title+'\n')
      courseData.forEach(function(item){
      var chapterTitle=item.chapterTitle
      console.log(chapterTitle+"\n")
      item.videos.forEach(function(video){
         console.log('['+video.id+']'+video.title+'\n')
         })
      })
   })
}
function getPageAsync(url) {
   return new promise(function(resolve,reject){
      console.log('正在爬取'+url)
http.get(url,function (res) {
   // body...
   var html=""
   res.on('data',function(data){
      html+=data
   })
   res.on('end',function(){
   resolve(html)
    })
   }).on('error',function(){
      reject(e)
      console.log('chucuo')
   })
})
}

var fetchCourseArray=[]
videoIds.forEach(function(id){
  fetchCourseArray.push(getPageAsync(baseURl+id))
})

promise
.all(fetchCourseArray)
.then(function(paomises){
   var coursesData=[]
   promises.forEach(function(html){
      var courses=filterChapters(html)
      coursesData.push(courses)
   })
      coursesData.sort(function(a,b){
         return a.numeber<b.numeber
      })
      printCourseInfo(coursesData)
   })





