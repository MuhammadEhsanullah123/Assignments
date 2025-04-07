import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SectionList,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native';

const contactsData = [
  { name: 'Muhammed Ehsanullah', number: '03111234567', group: 'Family' },
  { name: 'Raja Shani', number: '03212345678', group: 'Friends' },
  { name: 'Ali Hassan', number: '03333456789', group: 'Work' },
  { name: 'Ahmed Raza', number: '03444567890', group: 'Family' },
  { name: 'Zain Ahmed', number: '03555678901', group: 'Friends' },
  { name: 'Umer Khan', number: '03666789012', group: 'Work' },
  { name: 'Saad Ehsan', number: '03777890123', group: 'Family' },
  { name: 'Asad Ullah', number: '03888901234', group: 'Friends' },
  { name: 'Hassan Javed', number: '03999012345', group: 'Work' },
  { name: 'Shayan Ali', number: '03000123456', group: 'Family' },
];

export default function App() {
  const [filter, setFilter] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const filteredContacts = contactsData.filter(
    c =>
      c.name.toLowerCase().includes(filter.toLowerCase()) ||
      c.number.includes(filter)
  );

  const groupedContacts = ['Family', 'Friends', 'Work'].map(group => ({
    title: group,
    data: filteredContacts.filter(c => c.group === group)
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Manager</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by name or number"
        value={filter}
        onChangeText={setFilter}
      />
      <SectionList
        sections={groupedContacts}
        keyExtractor={(item, index) => item.number + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => setSelectedContact(item)}
          >
            <Text>{item.name} ({item.number})</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />

      <Modal
        visible={selectedContact !== null}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSelectedContact(null)}
      >
        <View style={styles.modalView}>
          {selectedContact && (
            <>
              <Text style={styles.modalTitle}>Contact Details</Text>
              <Text>Name: {selectedContact.name}</Text>
              <Text>Number: {selectedContact.number}</Text>
              <Text>Group: {selectedContact.group}</Text>
              <TouchableOpacity
                onPress={() => setSelectedContact(null)}
                style={styles.closeButton}
              >
                <Text style={{ color: 'white' }}>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 10,
  },
  contactItem: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  modalView: {
    marginTop: '50%',
    marginHorizontal: 30,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    alignItems: 'center',
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  closeButton: {
    marginTop: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 6,
  },
});

