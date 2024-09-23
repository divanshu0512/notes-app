import React from "react"

export default function Sidebar({notes , addNote , deleteNote , activeNote , setActiveNote})
{

    const sortedArray = notes.sort((a,b) => b.date - a.date);
    console.log("sorted array  : ",sortedArray);

    return (

        

        <div className="sidebar">

            <div className="sidebar-head">
            <h1>Notes</h1>
            <h3 className="add" onClick={addNote}>Add</h3>
            </div>

            

                {sortedArray.map((note) => {
                        console.log("note data : ",note)
                return (

            <div key={note.id} className={`sidebar-body ${note.id === activeNote && "active"}`}  onClick={() => setActiveNote(note.id)}>
                     <div className="sidebar-note">
                        <h2 className="title">{note.title && note.title.substr(0 , 20) + ".."}</h2>
                        <h3 className="delete"  onClick={() => deleteNote(note.id)}>Delete</h3>
                        </div>
                        <div className="sidebar-notes">
                        <h4>{note.body && note.body.substr(0 , 30) + " .."}</h4>
                        <h5>Last Modified {new Date(note.date).toLocaleDateString("en-GB" , {
                            hour:"2-digit",
                            minute:"2-digit",
                        })}
                        </h5>
                    </div>
                    
                    </div>
                )

                })}
                
                   

                   


                   

           


        </div>
    )
}