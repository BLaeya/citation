import citations from "../data/citations"

let idRandom = Math.floor(Math.random() * citations.length);
let citationRandom = citations[idRandom];
console.log(idRandom);
function Content() {
    return <div className="content-container">
        <h2>{citationRandom.citation}</h2>
        <h4>{citationRandom.autrice}</h4>
        <p>{citationRandom.bio}</p>
    </div>
}
export default Content;