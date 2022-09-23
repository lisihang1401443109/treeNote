
const Parent = (props) => {

    const {parentList} = props

    return <div id="parents">
        {parentList.map( (node) => {
            <div>{node.title + '->'}</div>
        } )}
    </div>
}

export default Parent