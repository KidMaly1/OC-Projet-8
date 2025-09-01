
function Tags({ alohaTags }) {

  return (
                <div className="tag-container">

                        {alohaTags.map((tag, index) => (<span key={index} className="tag">{tag}</span>))}

                </div>
        );
}


export default Tags


 