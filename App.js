import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Section = ({ title, children }) => (
  <View style={{ marginBottom: 18, backgroundColor: '#fff', borderRadius: 12, padding: 14, elevation: 1 }}>
    <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 8 }}>{title}</Text>
    {children}
  </View>
);

export default function App() {
  const [agua, setAgua] = useState('8');
  const [meta, setMeta] = useState('7:00 - 11:00 hábitos, 15:00 movimiento, 22:30 dormir');

  const comidas = [
    ['Lunes', 'Desayuno balanceado', 'Almuerzo proteína+ensalada', 'Cena ligera'],
    ['Martes', 'Avena/fruta', 'Pechuga/verduras', 'Sopa/ensalada'],
    ['Miércoles', 'Huevos/tostada', 'Legumbres/ensalada', 'Pescado/verduras'],
    ['Jueves', 'Yogur/granola', 'Arroz integral + pollo', 'Ensalada+proteína'],
    ['Viernes', 'Batido balanceado', 'Pasta integral/vegetales', 'Tortilla/ensalada'],
    ['Sábado', 'Opcional libre equilibrado', 'Opcional libre equilibrado', 'Opcional libre equilibrado'],
    ['Domingo', 'Plan familiar saludable', 'Plan familiar saludable', 'Plan familiar saludable'],
  ];

  const TipsEdad = ({ rango, tips }) => (
    <View style={{ marginTop: 6 }}>
      <Text style={{ fontWeight: '700' }}>{rango}</Text>
      {tips.map((t, i) => <Text key={i} style={{ marginLeft: 8, marginTop: 2 }}>• {t}</Text>)}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f6f8' }}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800', marginBottom: 12 }}>Agenda para Bienestar</Text>

        <Section title="Cronograma de hábitos (edita tu rutina)">
          <TextInput
            value={meta}
            onChangeText={setMeta}
            multiline
            style={{ backgroundColor: '#f0f0f0', borderRadius: 8, padding: 10 }}
          />
          <Text style={{ marginTop: 8, color: '#555' }}>
            Idea base: 7:00–11:00 hábitos / 15:00 movimiento / 22:30 dormir.
          </Text>
        </Section>

        <Section title="Hidratación diaria">
          <Text>Objetivo recomendado: 30–35 ml de agua por kg de peso (ajusta por clima/actividad).</Text>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', marginTop: 10 }}>
            <Text>Vasos/día: </Text>
            <TextInput
              value={agua}
              onChangeText={setAgua}
              keyboardType="numeric"
              style={{ backgroundColor: '#f0f0f0', borderRadius: 8, padding: 8, minWidth: 60, textAlign: 'center' }}
            />
          </View>
          <Text style={{ marginTop: 8, color: '#555' }}>
            Señales útiles: orina clara, energía estable, menos antojos.
          </Text>
        </Section>

        <Section title="Tabla semanal de comidas (equilibrio sin marcas)">
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 10 }}>
            {['Día','Desayuno','Almuerzo','Cena'].map((h,i)=>(
              <Text key={'h'+i} style={{position:'absolute',opacity:0}}>{h}</Text>
            ))}
            {comidas.map((fila, idx) => (
              <View key={idx} style={{ flexDirection: 'row', backgroundColor: idx%2? '#fafafa':'#fff' }}>
                {fila.map((celda, j) => (
                  <View key={j} style={{ flex: 1, borderRightWidth: j<3?1:0, borderColor:'#eee', padding: 10 }}>
                    <Text style={{ fontWeight: j===0 ? '700':'400' }}>{celda}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
          <Text style={{ marginTop: 8, color:'#555' }}>
            Ajusta por preferencias, alergias y presupuesto. Mantén 80/20: 80% limpio, 20% flexible.
          </Text>
        </Section>

        <Section title="Consejos de ejercicio por edades">
          <TipsEdad rango="18–39 años" tips={[
            '150–300 min/sem de cardio moderado o 75–150 min vigoroso',
            '2–3 días/sem de fuerza (todo el cuerpo)',
            'Movilidad 5–10 min/día',
          ]}/>
          <TipsEdad rango="40–59 años" tips={[
            'Mantén 150–300 min/sem; prioriza fuerza y core',
            'Caminar después de comer (10–15 min)',
            'Equilibrio y movilidad de cadera/tobillo',
          ]}/>
          <TipsEdad rango="60+ años" tips={[
            'Fuerza funcional 2–3 días/sem',
            'Equilibrio diario (1–5 min): apoyo unipodal con soporte',
            'Cardio bajo impacto: caminar, bici, agua',
          ]}/>
        </Section>

        <Section title="Sueño y descanso">
          <Text>Objetivo: 7–9 h. Rutina: bajar pantallas 60–90 min antes, cuarto oscuro y fresco, cena 3 h antes.</Text>
        </Section>

        <Section title="Suplementación (sin marcas)">
          <Text>Base sugerida (consultar profesional si corresponde):</Text>
          <Text style={{ marginTop: 6 }}>• Proteína de calidad según requerimiento.</Text>
          <Text>• Multivitamínico general según edad/sexo.</Text>
          <Text>• Fibra si tu ingesta de vegetales es baja.</Text>
          <Text style={{ marginTop: 6, color:'#555' }}>
            Evitamos marcas aquí; el enfoque es educación y hábitos.
          </Text>
        </Section>

        <TouchableOpacity
          onPress={() => alert('¡Listo! Tu día de hábitos quedó guardado localmente.')}
          style={{ backgroundColor: '#0ea5e9', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 10 }}
        >
          <Text style={{ color:'#fff', fontWeight:'700' }}>Guardar planificación del día</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
