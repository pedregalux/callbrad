import {
  dpoAddOns,
  dpoPackageNotes,
  dpoPackages,
  workspaceDetailedPackages,
} from './offers';

const workspaceTranslations = [
  {
    price: '$1.100.000',
    billing: 'pago único',
    bestFor: 'Equipos que necesitan ordenar los aspectos básicos de la Ley N° 21.719',
    typicalTime: 'En el plazo de una semana',
    onboardingLead: 'Inicio rápido de 2 horas y personalización con un especialista',
    onboardingItems: [
      'Configuración en tu entorno (Notion)',
      'Recorrido guiado para 1 responsable interno',
      'Personalización y configuración de campos',
    ],
    functionalityLead: null,
    functionalityItems: [
      'Inventarios de tratamiento: proveedores, sistemas, activos, transferencias y actividades de tratamiento',
      'Marcos para evaluar licitud, transferencias internacionales, riesgos e impacto en protección de datos',
      'Registros de terceros mandatarios, solicitudes de derechos de titulares y brechas de datos',
      'Bases de datos jurídicas y de configuración',
      'Estructura de páginas de privacidad para públicos externos',
      'Capacidades básicas de sistema operativo preparado para IA',
      'Lógica de revisión para mantener los registros actualizados',
    ],
    technicalSupport: 'Correo electrónico (siguiente día hábil)',
    immediateImplementation: 'Adicional: $550.000 CLP + IVA',
    additionalExpertHours: '$220.000 CLP / hora + IVA',
    operationalCommitmentHours: '4 horas',
    operationalCommitmentItems: [
      '1 h de configuración inicial en Notion',
      '2 h de sesión con el cliente',
      '1 h de soporte por correo electrónico o ajustes menores',
    ],
  },
  {
    price: '$1.900.000',
    billing: 'pago único',
    bestFor: 'Equipos que quieren operar el cumplimiento de la Ley N° 21.719 con un seguimiento mínimo',
    typicalTime: 'En el plazo de 2 semanas',
    onboardingLead: "Además de lo incluido en 'Essential':",
    onboardingItems: [
      '2 revisiones semanales de 1 hora con un especialista para personalizar la configuración',
      'Soporte por chat dedicado (Slack o Google Chat) durante el período de puesta en marcha',
    ],
    functionalityLead: 'Todo lo incluido en Essential, más:',
    functionalityItems: [
      'Configuración del asistente de sistema operativo Brad AI',
      'Cola de revisiones y evaluaciones',
      'Gestor de tareas integrado',
      'Paneles operativos',
      'Flujos de revisión recurrentes',
      'Estructura de responsabilidad y rendición de cuentas',
    ],
    technicalSupport:
      'Correo electrónico o canales de mensajería empresarial acordados (siguiente día hábil)',
    immediateImplementation: 'Adicional: $850.000 CLP + IVA',
    additionalExpertHours: '$220.000 CLP / hora + IVA',
    operationalCommitmentHours: '8 horas',
    operationalCommitmentItems: [
      '1 h de configuración inicial en Notion',
      '2 h de sesión inicial con el cliente',
      '2 h de sesiones semanales de revisión',
      '1 h de configuración de Brad AI y flujos de trabajo',
      '2 h de soporte por correo electrónico y chat',
    ],
  },
  {
    price: '$3.400.000',
    billing: 'pago único',
    bestFor: 'Equipos que necesitan una gobernanza más sólida',
    typicalTime: 'En el plazo de 3 semanas',
    onboardingLead: "Además de lo incluido en 'Operational':",
    onboardingItems: [
      'Migración completa de datos a partir de los documentos proporcionados por la empresa',
      'Configuración completa del inventario de actividades de tratamiento y demás bases de datos necesarias a partir de los documentos proporcionados por la empresa',
      'Capacitación de 30 minutos para un máximo de 10 usuarios clave',
    ],
    functionalityLead: 'Todo lo incluido en Operational, más:',
    functionalityItems: [
      'Centro de políticas para las políticas internas',
      'Seguimiento de lectura y aceptación de políticas',
      'Responsables, ciclos de revisión y estructura de versiones de las políticas',
      'Vistas mejoradas de evidencia para auditorías',
      'Paneles de gobernanza para la gerencia',
    ],
    technicalSupport:
      'Correo electrónico o canales de mensajería empresarial acordados (mismo día hábil)',
    immediateImplementation: 'Adicional: $1.600.000 CLP + IVA',
    additionalExpertHours: '$220.000 CLP / hora + IVA',
    operationalCommitmentHours: '16 horas',
    operationalCommitmentItems: [
      '1 h de configuración inicial en Notion',
      '2 h de sesión inicial con el cliente',
      '2 h de sesiones semanales de revisión',
      '7 h de migración de datos y configuración del Data Protection OS (incluido Brad AI)',
      '2 h de configuración del Centro de Políticas',
      '2 h de soporte por correo electrónico y chat',
    ],
  },
] as const;

export const workspaceDetailedPackagesEsCl = workspaceDetailedPackages.map((pkg, index) => ({
  ...pkg,
  ...workspaceTranslations[index],
}));

const dpoTranslations = [
  {
    price: '$220.000',
    billing: '/mes',
    bestFor: 'Ideal para soporte de privacidad puntual',
    summary:
      'Para equipos que necesitan un DPO formalmente designado y soporte de privacidad puntual.',
    points: [
      'DPO designado para 1 entidad responsable de datos en 1 jurisdicción',
      'Hasta 1 hora al mes de soporte DPO*',
      '1 reunión mensual de coordinación de 30 minutos',
      'Revisión general anual del cumplimiento de la Ley N° 21.719**',
      'Soporte asincrónico por correo electrónico (siguiente día hábil)',
    ],
  },
  {
    price: '$750.000',
    billing: '/mes',
    bestFor: 'Ideal para soporte práctico y seguimiento',
    summary:
      'Para equipos que quieren mantener en marcha el cumplimiento de la Ley N° 21.719 con soporte práctico y seguimiento.',
    points: [
      'DPO designado para 1 entidad responsable de datos en 1 jurisdicción',
      'Hasta 4 horas al mes de soporte DPO*',
      '1 reunión mensual de coordinación de 30 minutos',
      'Revisión anual exhaustiva del cumplimiento de la Ley N° 21.719**',
      'Soporte asincrónico por correo electrónico o canales de mensajería empresarial acordados (siguiente día hábil)',
      'Actualizaciones pertinentes del Data Protection OS y de la capacitación sobre la Ley N° 21.719, cuando corresponda.',
    ],
  },
  {
    price: '$1.300.000',
    billing: '/mes',
    bestFor: 'Ideal para una gobernanza más sólida y soporte más rápido',
    summary:
      'Para equipos que necesitan una participación más activa del DPO, una gobernanza más sólida y soporte más rápido.',
    points: [
      'DPO designado para 1 entidad responsable de datos en 1 jurisdicción',
      'Hasta 8 horas al mes de soporte DPO*',
      '2 reuniones mensuales de coordinación de 30 minutos, o 1 reunión mensual de 60 minutos',
      'Revisión anual exhaustiva del cumplimiento de la Ley N° 21.719 y plan de acciones prioritarias**',
      'Soporte prioritario por correo electrónico o canales de mensajería empresarial acordados (mismo día hábil)',
      'Soporte telefónico prioritario para asuntos urgentes de privacidad dentro y fuera del horario hábil***',
      'Actualizaciones pertinentes del Data Protection OS y de la capacitación sobre la Ley N° 21.719, cuando corresponda.',
    ],
  },
] as const;

export const dpoPackagesEsCl = dpoPackages.map((pkg, index) => ({
  ...pkg,
  ...dpoTranslations[index],
}));

const dpoPackageNotesTranslations = [
  '* Incluye reuniones de coordinación, preparación, seguimiento, soporte por correo electrónico o mensajería, revisión de documentos, soporte para incidentes, solicitudes de derechos de titulares y proveedores, y trabajo general de privacidad.',
  '* Incluye reuniones de coordinación, preparación, seguimiento, soporte por correo electrónico o mensajería, revisión de documentos, soporte para incidentes, solicitudes de derechos de titulares y proveedores, y trabajo general de privacidad.',
  '** Basado en la información disponible y en la relación mensual de servicios DPO.',
  '*** Las horas de soporte fuera del horario hábil se cobran como servicio adicional.',
] as const;

export const dpoPackageNotesEsCl = dpoPackageNotes.map(
  (_, index) => dpoPackageNotesTranslations[index],
);

const dpoAddOnTranslations = [
  {
    name: 'Entidad jurídica adicional',
    price: '$110.000 CLP/mes + IVA',
    summary: 'Agrega soporte para una entidad jurídica adicional.',
  },
  {
    name: 'Cobertura de jurisdicción adicional',
    price: '$55.000 CLP/mes + IVA',
    summary: 'Agrega soporte para una jurisdicción adicional.',
  },
  {
    name: 'Horas adicionales de soporte',
    price: '$220.000 CLP/hora + IVA',
    summary: 'Tiempo adicional de soporte fuera del alcance del paquete.',
  },
  {
    name: 'Soporte urgente fuera del horario hábil',
    price: '$320.000 CLP/hora + IVA',
    summary:
      'Soporte excepcional fuera del horario normal para incidentes urgentes de privacidad, brechas o asuntos regulatorios.',
  },
] as const;

export const dpoAddOnsEsCl = dpoAddOns.map((addon, index) => ({
  ...addon,
  ...dpoAddOnTranslations[index],
}));
