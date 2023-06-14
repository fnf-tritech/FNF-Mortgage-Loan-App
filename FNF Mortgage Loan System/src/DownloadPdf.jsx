import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import { getAllLocalStorage } from "./GetAllLocalStorage";


// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  section: {
    margin: 10,
    padding: 10,
  },
});

// Create Document Component
function LocalStorageDocument() {
  // Get all the local storage items as an object
  const localStorageObject = getAllLocalStorage();

  // Create an array of key-value pairs from the object
  const localStorageArray = Object.entries(localStorageObject);

  return (
    <Document>
      {/*render a single page*/}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Local Storage Data</Text>
        </View>
        {/* Loop through the array and display each key-value pair */}
        {localStorageArray.map(([key, value]) => (
          <View style={styles.section} key={key}>
            <Text>{key}: {JSON.stringify(value)}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

// Create Download Link Component
function DownloadLink() {
  return (
    <PDFDownloadLink
      document={<LocalStorageDocument />}
      fileName="local-storage-data.pdf"
    >
      {({ loading }) =>
        loading ? "Loading document..." : "Download local storage data"
      }
    </PDFDownloadLink>
  );
}

export default DownloadLink;
