export const convertToBase64 = (file: File) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () =>
            resolve(
                String(reader.result).replace('data:', '').replace(/^.+,/, '')
            )
        reader.onerror = error => reject(error)
    })
