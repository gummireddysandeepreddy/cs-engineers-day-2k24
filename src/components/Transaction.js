import useFormContext from "../hooks/useFormContext"

const Transaction = () => {

    const { data, handleChange, handleImageChange } = useFormContext()
    
    const content = (
        <>
            <label htmlFor="TransactionFrom">Payment Platform</label>
            <select id="TransactionFrom" name="TransactionFrom" value={data.Transaction} onChange={handleChange}>
                <option value="">Select Payment Platform</option>
                <option value="GPay">GPay</option>
                <option value="Paytm">Paytm</option>
                <option value="Phonepe">Phonepe</option>
            </select>
            <label htmlFor="TransactionID">Transaction ID</label>
            <input
                type="text"
                id="TransactionID"
                name="TransactionID"
                placeholder="Transaction ID"
                // pattern="[0-9]{12}"
                maxLength="12"
                value={data.TransactionID}
                onChange={handleChange}
            />
            <label htmlFor="TransactionScreenShot">Upload Transaction Screenshot</label>
            <input
                type="file"
                id="TransactionScreenShot"
                name="TransactionScreenShot"
                accept="image/*"
                onChange={handleImageChange}
            />
        </>
    )

    return content
}
export default Transaction


/*

let file = document.querySelector('#image');
  let img = document.querySelector('img');
  let submit_button = document.getElementById('submit-button');
  submit_button.disabled = true;
  let upload_image_status = document.getElementById('status_of_image_upload');
  file.addEventListener('change', () => {
    let fr = new FileReader();
    fr.addEventListener('loadend', () => {
      upload_image_status.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Loading..." style="height: 60px;" />`;
      let res = fr.result;
      // Comment out or remove the following line to prevent displaying the image as a preview
      // img.src = res;
      let spt = res.split('base64,')[1];
      let obj = {
        base64: spt,
        type: file.files[0].type,
        name: file.files[0].name,
      };
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
      })
        .then((r) => r.text())
        .then((data) => {
          imageUrl = data;
          console.log(imageUrl);
          upload_image_status.innerHTML = `<img src="https://res.cloudinary.com/sivapullaiah/image/upload/v1709040534/icons8-tick_qexxjn.gif" alt="Loading..." style="height: 40px" />`;
          submit_button.disabled = false;
        });
    });
    fr.readAsDataURL(file.files[0]);
  });

  chamge the code from js to react

*/

