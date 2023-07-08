export const officialAPIEndpoint = import.meta.env.VITE_CUSTOM_API_ENDPOINT;
const customAPIEndpoint = import.meta.env.VITE_CUSTOM_API_ENDPOINT;
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint];
