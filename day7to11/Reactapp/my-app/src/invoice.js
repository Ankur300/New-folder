import { useNavigate,useParams } from "react-router-dom";

function Invoice() {
    let params = useParams();
    return (
    <div>
    <h1>Invoice {params.invoiceId}</h1>
    </div>
    )
    }

export default Invoice;
