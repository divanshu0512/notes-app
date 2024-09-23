import ReactMarkdown from "react-markdown"

export default function Main({activeNote , onUpdateNotes})
{

    const onEditField = (key , value) => { 
        onUpdateNotes({
            ...activeNote,
            date:Date.now(),
            [key] :value,

        })
     }
        
     if(!activeNote) return <div className="no-node">please select a node.!!</div>

    return (
        <div className="main">
            <div className="text">
                <input  type="text" 
                value={activeNote ? activeNote.title : ""}
                 id="title"
                 placeholder="Title here..."
                 onChange={(e) => onEditField ("title" , e.target.value)}
                 autoFocus  
                  />
            </div>

            <div className="text2">
                <textarea id="body" 
                value={activeNote ? activeNote.body : ""}
                 placeholder="write your notes here..."
                 onChange={(e) => onEditField ("body" , e.target.value)}
                 />
            </div>

            <div className="title2">
                <h2>{activeNote ? activeNote.title : "TITLE"}</h2>
                <ReactMarkdown className="preview-text">{activeNote ? activeNote.body : "preview"}</ReactMarkdown>
            </div>

        </div>
    );
}