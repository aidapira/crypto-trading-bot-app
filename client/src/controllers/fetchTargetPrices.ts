
export const fetchTargetPrices = async () =>{
    const response = await fetch('/fetch-target-prices')
    return response.json()
}