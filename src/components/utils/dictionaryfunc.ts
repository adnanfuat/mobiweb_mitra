// import { useState } from "react";



export default function dictionaryFunc ({key, dictionary}) {

        // const [first, setfirst] = useState(false)

        let text= dictionary?.find(a=>a?.key== key)?.title;

        console.log("aaaaa", dictionary?.length)

        

return {text};
}                
                        



// 1682173393396  : Ana Sayfa