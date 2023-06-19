import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

interface MenuItem {
  id: string;
  label: string;
}

const DropdownMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const menuItems: MenuItem[] = [
    {id: '1', label: 'Option 1'},
    {id: '2', label: 'Option 2'},
    {id: '3', label: 'Option 3'},
    // Add more menu items as needed
  ];

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <Modal visible={true} animationType="fade" transparent={true}>
        
          <View style={styles.menu}>
            <FlatList
              data={menuItems}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleSelectItem(item)}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
     
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  menuItem: {
    padding: 10,
  },
});

export default DropdownMenu;
