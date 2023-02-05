console.log("hello")
fetch('http://themealdb.com/api/json/v1/1/list.php?c=list')
    .then(res => {
        return res.json ()
    })
    .then(data => {
        console.log(data)
    })
