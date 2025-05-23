import { ArcoCalendarLang, GeneLang } from '../interface';

const calendarLang: ArcoCalendarLang = {
  formatYear: 'YYYY',
  formatMonth: 'M/YYYY',
  today: 'Hoy',
  view: {
    month: 'Mes',
    year: 'Año',
    week: 'Semana',
    day: 'Fecha',
  },
  month: {
    long: {
      January: 'Enero',
      February: 'Febrero',
      March: 'Marzo',
      April: 'Abril',
      May: 'Mayo',
      June: 'Junio',
      July: 'Julio',
      August: 'Agosto',
      September: 'Septiembre',
      October: 'Octubre',
      November: 'Noviembre',
      December: 'Diciembre',
    },
    short: {
      January: 'Ene',
      February: 'Feb',
      March: 'Mar',
      April: 'Abr',
      May: 'May',
      June: 'Jun',
      July: 'Jul',
      August: 'Ago',
      September: 'Sep',
      October: 'Oct',
      November: 'Nov',
      December: 'Dic',
    },
  },
  week: {
    long: {
      self: 'Semana',
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
    },
    short: {
      self: 'Semana',
      monday: 'Lun',
      tuesday: 'Mar',
      wednesday: 'Mié',
      thursday: 'Jue',
      friday: 'Vie',
      saturday: 'Sáb',
      sunday: 'Dom',
    },
  },
};

const lang: GeneLang = {
  locale: 'es-ES',
  empty: {
    description: 'No hay datos',
  },
  drawer: {
    okText: 'Aceptar',
    cancelText: 'Cancelar',
  },
  popconfirm: {
    okText: 'Aceptar',
    cancelText: 'Cancelar',
  },
  modal: {
    okText: 'Aceptar',
    cancelText: 'Cancelar',
  },
  pagination: {
    goto: 'Ir a',
    page: 'Página',
    countPerPage: '/ página',
    total: '{0} en total',
  },
  table: {
    okText: 'Aceptar',
    resetText: 'Reiniciar',
  },
  upload: {
    start: 'Comienzo',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    retry: 'Haga clic para intentarlo de nuevo',
    buttonText: 'Haga clic para cargar',
    preview: 'Vista Previa',
    drag: 'Haga clic o arrastre los archivos para cargarlos aquí',
    dragHover: 'Libera el archivo y empieza a subir',
    error: 'Fallar',
  },
  calendar: calendarLang,
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: 'Seleccionar fecha',
      week: 'Seleccionar semana',
      month: 'Elegir un mes',
      year: 'Elegir un año',
      quarter: 'Seleccionar trimestre',
      time: 'Seleccionar hora',
    },
    rangePlaceholder: {
      date: ['Fecha inicial', 'Fecha final'],
      week: ['Semana inicial', 'Semana final'],
      month: ['Mes inicial', 'Mes final'],
      year: ['Año inicial', 'Año final'],
      quarter: ['Trimestre inicial', 'Trimestre final'],
      time: ['Seleccionar hora', 'Seleccionar hora'],
    },
    selectTime: 'Select time',
    today: 'Today',
    now: 'Now',
    ok: 'Ok',
  },
  image: {
    loading: 'cargando',
  },
  imagePreview: {
    fullScreen: 'Pantalla completa',
    rotateRight: 'Gira a la derecha',
    rotateLeft: 'Girar a la izquierda',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    originalSize: 'Tamaño original',
  },
  typography: {
    copy: 'Copiar',
    copied: 'Copiado',
    edit: 'Editar',
    expand: 'Expandir',
    collapse: 'Pliegue',
  },
  colorPicker: {
    history: 'Colores históricos',
    preset: 'Colores predefinidos del sistema',
    empty: 'No hay datos',
  },
};

export default lang;
