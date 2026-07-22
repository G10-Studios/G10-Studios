import "./PageContainer.css";

export default function PageContainer({ title, children }) {
    return (
        <div className="page-container">

            <div className="page-header">
                <h1>{title}</h1>
            </div>

            <div className="page-body">
                {children}
            </div>

        </div>
    );
}