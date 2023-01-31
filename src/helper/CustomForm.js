import './CustomForm.css'

export default function CustomForm({ handleSubmit, children, className, title }) {
    
    return (
        <form onSubmit={handleSubmit} className={`${className} custom-form`}>
            {title && <span className="title">{title}</span>}
            { children }
        </form>
    )
}
