import * as React from "react";
import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, FlatList, TextInput, TouchableOpacity } from "react-native";

// Datos de ejemplo
const userProfile = {
  name: "Wendy Mora",
  title: "Frontend Developer",
  avatar: "https://i.pravatar.cc/300",
  bio: "Apasionada por crear interfaces limpias y responsive."
};

const cardData = [
  { id: "1", title: "React Native", description: "Aprender fundamentos básicos y componentes." },
  { id: "2", title: "TypeScript", description: "Aplicar tipos, interfaces y seguridad de tipo." },
  { id: "3", title: "NativeWind", description: "Estilizar apps con TailwindCSS en React Native." }
];

const contactsData = [
  { id: "1", name: "Juan Pérez", phone: "3001234567" },
  { id: "2", name: "María Gómez", phone: "3019876543" },
  { id: "3", name: "Carlos Ruiz", phone: "3025647382" },
  { id: "4", name: "Ana Torres", phone: "3038765432" },
  { id: "5", name: "Luis Castro", phone: "3041237890" }
];

export default function App() {
  const [search, setSearch] = useState<string>("");

  // Filtrar contactos según búsqueda
  const filteredContacts = contactsData.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
      <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>

        {/* --- Actividad 1: Perfil Personal --- */}
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Image
            source={{ uri: userProfile.avatar }}
            style={{ width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: "#2563EB" }}
          />
          <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 10 }}>{userProfile.name}</Text>
          <Text style={{ fontSize: 16, color: "#6B7280" }}>{userProfile.title}</Text>
          <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10 }}>{userProfile.bio}</Text>
        </View>

        {/* --- Actividad 2: Componente de tarjeta reutilizable --- */}
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>📌 Tarjetas de Habilidades</Text>
          {cardData.map(card => (
            <View key={card.id} style={{
              backgroundColor: "#FFFFFF",
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4
            }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>{card.title}</Text>
              <Text style={{ fontSize: 14, color: "#6B7280" }}>{card.description}</Text>
            </View>
          ))}
        </View>

        {/* --- Actividad 3: Lista de Contactos con búsqueda --- */}
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>📇 Lista de Contactos</Text>
          <TextInput
            placeholder="Buscar contacto..."
            value={search}
            onChangeText={setSearch}
            style={{
              backgroundColor: "#FFFFFF",
              padding: 12,
              borderRadius: 12,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: "#D1D5DB"
            }}
          />
          <FlatList
            data={filteredContacts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={{
                backgroundColor: "#FFFFFF",
                padding: 16,
                borderRadius: 12,
                marginBottom: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#E5E7EB"
              }}>
                <Text style={{ fontSize: 16 }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: "#6B7280" }}>{item.phone}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
