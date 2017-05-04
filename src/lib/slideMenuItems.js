module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: 'Dashboard',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '헬로화면',
        router: {
          to: {
            name: 'Hello'
          }
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '샘플화면',
        router: {
          to: {
            name: 'Sample'
          }
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Dashboard v1',
        router: {
          to: {
            name: 'DashboardV1'
          }
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Dashboard v2',
        router: {
          to: {
            name: 'DashboardV2'
          }
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'InfoBox',
        router: {
          to: {
            name: 'InfoBoxExample'
          }
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Chart.js',
        router: {
          to: {
            name: 'ChartExample'
          }
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Alert',
        router: {
          to: {
            name: 'AlertExample'
          }
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Modal',
        router: {
          to: {
            name: 'ModalExample'
          }
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'APIExample',
        router: {
          to: {
            name: 'APIExample'
          }
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-files-o',
    name: 'Layout Options',
    badge: {
      type: 'Number',
      data: 4
    },
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Top Navigation',
        link: 'page/layout/top-nav.html'
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Boxed',
        link: 'page/layout/boxed.html'
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Fixed',
        link: 'page/layout/fixed.html'
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Collapsed Sidebar',
        link: 'page/layout/collapsed-sidebar.html'
      }
    ]
  },
  {
    type: 'item',
    icon: 'fa fa-th',
    name: 'Widgets',
    badge: {
      type: 'String',
      data: 'new'
    },
    router: {
      name: 'WidgetsExample'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-laptop',
    name: 'UI Elements',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'General',
        router: {
          to: 'General'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Icons',
        router: {
          to: 'Icons'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Buttons',
        router: {
          to: 'Buttons'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Sliders',
        router: {
          to: 'Sliders'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Timeline',
        router: {
          to: 'Timeline'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Modals',
        router: {
          to: 'Modals'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-edit',
    name: 'Forms',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'General Elements',
        router: {
          name: 'GeneralElements'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Advanced Elements',
        link: 'pages/forms/advanced.html'
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Editors',
        link: 'pages/forms/editors.html'
      }
    ]
  }
]
