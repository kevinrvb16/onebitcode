const DescriptionWithLink = ( props) => {
    if (!props.text) return null;
    if (props.link) {
        return (
            <>
                <p>{props.text}</p>
                <p>
                    <a href={props.link}>{props.link}</a>
                </p>
            </>
        )
    } else {
        return (
            <p><u>{props.text}</u></p>
        )
    }
}
export default DescriptionWithLink;