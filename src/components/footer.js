import "../sheets/footer.css";

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer">
            <p>Copyright {year}</p>
        </div>
    );
};