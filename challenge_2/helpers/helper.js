//This function parses the data received from the CoinDesk API call into a format suitable for the App.
const parser = (data) => {
    let output = {labels:[], data:[]};
    let parsedLabels = Object.keys(data.bpi);
    let parsedDataset = Object.values(data.bpi);

    output.labels = parsedLabels;
    output.data = parsedDataset;

    return output;
}

module.exports = {
    parser
};