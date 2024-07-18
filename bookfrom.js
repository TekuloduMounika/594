
import react from "react"
function Code() {
    return (
        <div>
            <table align="center" cellpadding="10">
                <h1>Book details</h1>
                <tr>
                    <td>Book_id:</td>
                    <td><input type="text" id="name" name="id" placeholder="Enter  book id"/></td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td><input type="text" id="name" name="name" placeholder="Enter title"/></td>
                </tr>
                <tr>
                    <td>Author_fname:</td>
                    <td><input type="text" id="name" name="name" placeholder="Enter u r First name"/></td>
                </tr>
                <tr>
                    <td>Author_lname:</td>
                    <td><input type="text" id="name" name="name" placeholder="Enter u r Last name"/></td>
                </tr>
                <tr>
                    <td>Released_year</td>
                    <td><input type="date" /></td>
                </tr>
                <tr>
                    <td>stock Quantity</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>pages</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td align="center" colspan="2">
                    <input type="submit" />
                    <input type="reset" /></td>
                </tr>

            </table>
        </div>
     )
}
export default Code;