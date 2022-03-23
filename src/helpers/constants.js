export const companyName = 'NaNLABS Challenge'
export const imgixFilters = {
    'h': {
        'name': 'Height',
        'values': {
            'h': {
                'type': 'range',
                'min': 0,
                'max': 1080,
                'step': 1,
                'value': 600
            }
        }
    },
    'w': {
        'name': 'Width',
        'values': {
            'w': {
                'type': 'range',
                'min': 0,
                'max': 1920,
                'step': 1,
                'value': 800
            }
        }
    },
    'fit': {
        'name': 'Fit',
        'values': {
            'fit': {
                'type': 'select',
                'options': [
                    'clamp',
                    'clip',
                    'crop',
                    'facearea',
                    'fill',
                    'fillmax',
                    'max',
                    'min',
                    'scale'
                ],
                'value': 'clip'
            }
        }
    },
    'auto': {
        'name': 'Auto',
        'values': {
            'auto': {
                'type': 'select',
                'options': [
                    'compress',
                    'enhance',
                    'format',
                    'redeye',
                    'true'
                ],
                'value': 'enhance'
            }
        }
    },
    'q': {
        'name': 'Quality',
        'values': {
            'q': {
                'type': 'range',
                'min': 0,
                'max': 100,
                'step': 1,
                'value': 80
            }
        }
    },
    'bri': {
        'name': 'Brightness',
        'values': { 
            'bri': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }
        }
    },
    'crop': {
        'name': 'Crop',
        'values': {
            'crop': {
                'type': 'select',
                'options': [
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'faces',
                    'entropy',
                    'edges',
                    'focal'
                ],
                'value': 'faces'
            }
        }
    },          
    'con': {
        'name': 'Contrast',
        'values': {
            'con': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }
        }
    },
    'gam': {
        'name': 'Gamma',
        'values': {
            'gam': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 1
            }
        }
    },
    'sat': {
        'name': 'Saturation',
        'values': {
            'sat': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }   
        }
    },
    'exp': {
        'name': 'Exposure',
        'values': {
            'exp': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }
        }
    },
    'flip': {
        'name': 'Flip',
        'values': {
            'flip': {
                'type': 'select',
                'options': ['h', 'v', 'hv'],
                'value': 'h'
            }
        }
    },
    'rot': {
        'name': 'Rotate',
        'values': {
            'rot': {
                'type': 'range',
                'min': 0,
                'max': 359,
                'value': 0
            }
        }
    },
    'orient': {
        'name': 'Orientation',
        'values': {
            'orient': {
                'type': 'select',
                'options': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '90', '180', '270'],
                'value': '0'
            }
        }
    },
    'usm': {
        'name': 'Unsharp Mask',
        'values': {
            'usm': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }, 
            'usmrad': {
                'type': 'range',
                'min': 0,
                'max': 500,
                'value': 0
            }
        }
    },
}
