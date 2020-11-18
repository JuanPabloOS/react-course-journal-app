export const fileUpload = async (file) => {
    console.log("Start cloudinary")
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dx9y0k78q/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body:formData
        });

        if (resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url
        }else{
            throw await resp.json();
        }
    } catch (error) {
        console.log(error)
        throw error;
    }

    // return url de la imagen
}