

export default function DocUI({ link }) {
    return (
        <iframe className="docUI" src={`https://docs.google.com/gview?url=${link}&embedded=true`}></iframe>
    )
}
