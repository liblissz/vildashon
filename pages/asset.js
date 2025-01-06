const pages = [
    {title: "csharp(c#)", url:"../csharp.html", content:"learn c#" },
    {title: "feedback", url:"../feedback.html", content:"give a feedback message" },
    {title: "java", url:"../java.html", content:"learn java" },
    {title: "python", url:"../python.html", content:"learn python" },
    {title: "c program", url:"../c.html", content:"learn c" },
    {title: "c++", url:"../cplusplus.html", content:"learn c++" },
    {title: "javscript js", url:"../java.html", content:"learn javascript(js)" },
    {title: "css", url:"../css.html", content:"learn casceding stylesheet(css)" },
    {title: "html", url:"../html.html", content:"learn html" },
    {title: "terms and condition", url:"../term.html", content:"term and condition" },
    {title: "use AI", url:"../ai.html", content:"use  AI" },
    {title: "c++", url:"../cplusplus.html", content:"learn c++" },
    {title: "homepage", url:"../homepage.html", content:"visit our home page" }
    
    ];
    
    function search(){
    const query = document.getElementById("searchinput").value.toLowerCase();
    const resultcontainer = document.getElementById("results");
    resultcontainer.innerHTML ='';
    if(query){
        const results = pages.filter(pages => pages.content.toLowerCase().includes(query)||
        pages.title.toLowerCase().includes(query)
    );
    if(results.length > 0){
        results.forEach(result =>{
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('results');
        resultDiv.style.background = "#333";
        resultDiv.style.padding = "10px";
        resultDiv.style.borderRadius = "10px";
            resultDiv.innerHTML = `<h2><a style ="color: white;" href="${result.url}">${result.title}</a></h2>
            <p style = "color:white">${result.content}</p>`;
            resultcontainer.appendChild(resultDiv);
            
        });
    }
        else{
            resultcontainer.innerHTML = `<p>no results found</p>`
        }
    
    }
    }