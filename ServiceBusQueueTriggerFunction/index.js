module.exports = async function(context, message) {
    context.log('JavaScript ServiceBus queue trigger function processed message', message);

    // // get file content from blob storage
    // const blobFilePath = message;

    // // Create BlobServiceClient
    // const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AzureWebJobsStorage);

    // // Get a reference to the container
    // const containerClient = blobServiceClient.getContainerClient('stemilevives'); // Replace with your actual container name

    // // Get a reference to the blob
    // const blobClient = containerClient.getBlockBlobClient(blobFilePath);

    // // Download blob content
    // const blobContent = (await blobClient.download()).readableStreamBody.toString('utf-8');
};