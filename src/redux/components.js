import shortid from 'shortid'

export const column = (generateId = shortid.generate) => ({
  type: 'column',
  id: generateId(),
  parentId: null,
  options: {
    columnOffset: 0,
    columnSpan: '12',
    classes: [{
      hideOnDesktop: false,
      hideOnTablet: false,
      hideOnMobile: false
    }],
    css: {
      backgroundColor: '',
      backgroundImage: '',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

      borderTopWidth: '',
      borderRightWidth: '',
      borderBottomWidth: '',
      borderLeftWidth: '',
      borderColor: '',
      borderStyle: 'none',

      paddingTop: '',
      paddingRight: '',
      paddingBottom: '',
      paddingLeft: ''
    },
    descendants: []
  }
})

export const row = (generateId = shortid.generate) => ({
  type: 'row',
  id: generateId(),
  parentId: null,
  options: {
    gridContentModel: 'grid', // ['grid', 'fluid']
    classes: '',
    css: {
      backgroundColor: '',
      backgroundImage: '',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

      marginTop: '',
      marginRight: '',
      marginBottom: '',
      marginLeft: '',

      borderTopWidth: '',
      borderRightWidth: '',
      borderBottomWidth: '',
      borderLeftWidth: '',
      borderColor: '',
      borderStyle: 'none',

      paddingTop: '',
      paddingRight: '',
      paddingBottom: '',
      paddingLeft: ''
    },
    descendants: []
  }
})

export const container = (generateId = shortid.generate) => ({
  _version: 6, // make sure src/redux/upgrade has been updated
  type: 'container',
  id: generateId(),
  options: {
    descendants: [
      row(generateId)
    ]
  }
})

export const copy = (generateId = shortid.generate) => ({
  type: 'copy',
  id: generateId(),
  options: {
    content: null,
    selectorId: '',
    classes: [{
      hideOnDesktop: false,
      hideOnTablet: false,
      hideOnMobile: false
    }],
    css: {
      marginTop: '',
      marginRight: '',
      marginBottom: '',
      marginLeft: '',

      borderTopWidth: '',
      borderRightWidth: '',
      borderBottomWidth: '',
      borderLeftWidth: '',
      borderColor: '',
      borderStyle: 'none',

      paddingTop: '',
      paddingRight: '',
      paddingBottom: '',
      paddingLeft: ''
    }
  }
})

export const heading = (generateId = shortid.generate) => ({
  type: 'heading',
  id: generateId(),
  options: {
    content: null,
    selectorId: '',
    classes: [{
      hideOnDesktop: false,
      hideOnTablet: false,
      hideOnMobile: false
    }],
    css: {
      marginTop: '',
      marginRight: '',
      marginBottom: '',
      marginLeft: '',

      borderTopWidth: '',
      borderRightWidth: '',
      borderBottomWidth: '',
      borderLeftWidth: '',
      borderColor: '',
      borderStyle: 'none',

      paddingTop: '',
      paddingRight: '',
      paddingBottom: '',
      paddingLeft: ''
    }
  }
})

export const video = (generateId = shortid.generate) => ({
  type: 'video',
  id: generateId(),
  options: {
    content: null,
    selectorId: '',
    classes: [{
      hideOnDesktop: false,
      hideOnTablet: false,
      hideOnMobile: false
    }],
    css: {
      marginTop: '',
      marginRight: '',
      marginBottom: '',
      marginLeft: '',

      borderTopWidth: '',
      borderRightWidth: '',
      borderBottomWidth: '',
      borderLeftWidth: '',
      borderColor: '',
      borderStyle: 'none',

      paddingTop: '',
      paddingRight: '',
      paddingBottom: '',
      paddingLeft: ''
    },
    html5Source: '',
    html5Poster: '',
    youtubeSource: '',
    videoType: null, // ['HTML5', 'YouTube']
    loop: false,
    autoPlay: false,
    mute: false,
    controls: false
  }
})
