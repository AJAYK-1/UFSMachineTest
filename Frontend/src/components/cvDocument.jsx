import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  header: { fontSize: 20, marginBottom: 10, fontWeight: 'bold' },
  sectionTitle: { fontSize: 14, marginTop: 15, marginBottom: 5, fontWeight: 'bold' },
  row: { marginBottom: 5 },
})

const CVDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>{data.name}</Text>
      <Text>Email: {data.email}</Text>
      <Text>Phone: {data.phone}</Text>

      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.row}>{data.summary}</Text>

      <Text style={styles.sectionTitle}>Experience</Text>
      {data.experience.map((exp, i) => (
        <View key={i} style={styles.row}>
          <Text>{exp.position} at {exp.company}</Text>
          <Text>{new Date(exp.startdate).toLocaleDateString()} - {new Date(exp.enddate).toLocaleDateString()}</Text>
          <Text>{exp.description}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Education</Text>
      {data.education.map((edu, i) => (
        <View key={i} style={styles.row}>
          <Text>{edu.college}, {edu.university}</Text>
          <Text>{new Date(edu.startdate).toLocaleDateString()} - {new Date(edu.enddate).toLocaleDateString()}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Skills</Text>
      <Text>{data.skills.join(', ')}</Text>
    </Page>
  </Document>
)

export default CVDocument