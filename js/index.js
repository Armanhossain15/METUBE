const loadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    const data = await res.json()
    console.log(data)
    const innerData = data.data
    console.log(innerData)
    displayData(innerData)
}
const displayData = (data) => {
    const allBlogs = document.getElementById('all-blogs')
    for (const singleData of data) {
        // console.log(singleData)
        // console.log(singleData.authors[0].profile_picture)
        const div = document.createElement('div')
        div.classList = `card bg-base-100 shadow-xl`

        div.innerHTML = `
        <figure><img src="${singleData.thumbnail}"
                            alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="flex items-start gap-x-4">
                            <div id="avator" class="avatar">
                                <div class="w-10 rounded-full">
                                    <img src="${singleData.authors[0].profile_picture}" />
                                  </div>
                            </div>
                            <div><h1 class="text-xl font-bold">${singleData.title}</h1></div>
                        </div>
                        <p class="name text-lg text-gray-500">${singleData.authors[0].profile_name}</p>
                        <p class="name text-base text-gray-500">${singleData.others.views}</p>
                        <div class="card-actions justify-end">
                        </div>
                    </div>
        `

        allBlogs.appendChild(div)
    }

}
loadData()