var forms = {
  "VERSION": "version",
  "VERSION_SPOOFING": "version_spoofing",
  "MOTOR_POWER_CONSTANT": "motor_power_constant",
  "CRUISE_CONTROL_DELAY": "cruise_control_delay",
  "THROTTLE_ALG": "throttle_alg",
  "MOTOR_START_SPEED": "motor_start_speed",
  "REMOVE_CHARGING_MODE": "remove_charging_mode",
  "STAY_ON_LOCKED": "stay_on_locked",
  "BMS_UART_76800":"bms_uart_76800",
  "SWD_ENABLE":"swd_enable",
  "SPEED_NORMAL_KMH":"speed_normal_kmh",
  "SPEED_NORMAL_KMH_EU":"speed_normal_kmh_eu",
  "SPEED_NORMAL_KMH_DE":"speed_normal_kmh_de",
  "SPEED_NORMAL_PHASE":"speed_normal_phase",
  "SPEED_NORMAL_BATTERY":"speed_normal_battery",
  "ERROR_RAISING_LEVEL":"error_raising_level",
  "CRUISE_CONTROL_NOBEEP":"cruise_control_nobeep",
  "NO_KERS":"no_kers",
  "NO_BRAKE_LIGHT_FLASH":"no_brake_light_flash",
  "NO_OVERSPEED_ALARM":"no_overspeed_alarm",
  "PATCH_ALL":"patch_all",
  "REGION":"region",
  "COMPAT_PATCHES":"compat_patches"
};

var formValues = Object.values(forms);
var queryStrings = window.location.search.substring(1);
var queries = queryStrings.split('&');

for (var i = 0; i < queries.length; i++) {
  var query = queries[i];
  var tmp = query.split('=');
  var found = false;

  for (var j = 0; j < formValues.length; j++) {
    if (formValues[j] === tmp[0]) {
      found = true;
      break;
    }
  }

  if(found) {
    if (tmp[1] === 'on') {
      tmp[1] = true;
    }

    ChangeForm(tmp[0], tmp[1], true);
  }
}

function GetForm(name) {
  return document.getElementsByName(name)[0];
}

function GetFormValue(name) {
  var o = GetForm(name);

  if (o.type === "checkbox") {
    return o.checked;
  }

  return o.value;
}

function GetPatchCheckBox(name) {
  var form = GetForm(name);
  return form.nextElementSibling && form.nextElementSibling.children[0]  && form.nextElementSibling.children[0].children[0];
}

function CheckForm(name, cb) {
  GetForm(name).disabled = !cb.checked;
}

function ChangeForm(name, value, patch) {
  var o = GetForm(name);

  if (o.type === "checkbox") {
    o.checked = value;
  } else {
    o.value = value;
  }

  if (typeof patch === 'boolean') {
    var cb = GetPatchCheckBox(name);

    if (cb && (patch != cb.checked)) {
      cb.click();
    }
  }
	if (name === 'region') { document.getElementsByName("region")[0].selectedIndex = value;}
	if (name === 'error_raising_level') { document.getElementsByName("error_raising_level")[0].selectedIndex = value; }
   	if (name === 'motor_start_speed') { document.getElementsByName("motor_start_speed_output")[0].value=value; }
	if (name === 'motor_power_constant') { document.getElementsByName("motor_power_constant_output")[0].value=value; }
	if (name === 'speed_normal_kmh') { document.getElementsByName("speed_normal_kmh_output")[0].value=value; }
	if (name === 'speed_normal_kmh_eu') { document.getElementsByName("speed_normal_kmh_eu_output")[0].value=value; }
	if (name === 'speed_normal_kmh_de') { document.getElementsByName("speed_normal_kmh_de_output")[0].value=value; }
	if (name === 'cruise_control_delay') { document.getElementsByName("cruise_control_delay")[0].value=value; }
}

function Preset_Default() {
  ChangeForm(forms.VERSION, "DRV126");
  ChangeForm(forms.MOTOR_POWER_CONSTANT, "51575", false);
  ChangeForm(forms.CRUISE_CONTROL_DELAY, "5", false);
  ChangeForm(forms.VERSION_SPOOFING, true);
  ChangeForm(forms.THROTTLE_ALG, false);
  ChangeForm(forms.REMOVE_CHARGING_MODE, false);
  ChangeForm(forms.MOTOR_START_SPEED, "5", false);
  ChangeForm(forms.STAY_ON_LOCKED, false);
  ChangeForm(forms.NO_KERS, false);
  ChangeForm(forms.ERROR_RAISING_LEVEL, "1");
  ChangeForm(forms.SPEED_NORMAL_KMH, "33", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_EU, "27", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_DE, "22", false);
  ChangeForm(forms.CRUISE_CONTROL_NOBEEP, false);
  ChangeForm(forms.NO_BRAKE_LIGHT_FLASH, false);
  ChangeForm(forms.NO_OVERSPEED_ALARM, false);
  ChangeForm(forms.PATCH_ALL, false);
  ChangeForm(forms.REGION, "1");
  ChangeForm(forms.COMPAT_PATCHES, true);
  handleTheWorld();
}

function Preset_BatteryMod() {
  ChangeForm(forms.VERSION, "DRV126");
  ChangeForm(forms.MOTOR_POWER_CONSTANT, "45000", false);
  ChangeForm(forms.CRUISE_CONTROL_DELAY, "5", false);
  ChangeForm(forms.VERSION_SPOOFING, true);
  ChangeForm(forms.THROTTLE_ALG, false);
  ChangeForm(forms.REMOVE_CHARGING_MODE, false);
  ChangeForm(forms.MOTOR_START_SPEED, "3", false);
  ChangeForm(forms.STAY_ON_LOCKED, false);
  ChangeForm(forms.NO_KERS, false);
  ChangeForm(forms.ERROR_RAISING_LEVEL, "2");
  ChangeForm(forms.SPEED_NORMAL_KMH, "45", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_EU, "27", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_DE, "22", false);
  ChangeForm(forms.CRUISE_CONTROL_NOBEEP, false);
  ChangeForm(forms.NO_BRAKE_LIGHT_FLASH, false);
  ChangeForm(forms.NO_OVERSPEED_ALARM, true);
  ChangeForm(forms.PATCH_ALL, false);
  ChangeForm(forms.REGION, "1");
  ChangeForm(forms.COMPAT_PATCHES, true);
  handleTheWorld();
}

function Preset_RollerPlausch() {
  ChangeForm(forms.VERSION, "DRV126");
  ChangeForm(forms.MOTOR_POWER_CONSTANT, "51575", false);
  ChangeForm(forms.CRUISE_CONTROL_DELAY, "5", false);
  ChangeForm(forms.VERSION_SPOOFING, true);
  ChangeForm(forms.THROTTLE_ALG, false);
  ChangeForm(forms.REMOVE_CHARGING_MODE, false);
  ChangeForm(forms.MOTOR_START_SPEED, "5", false);
  ChangeForm(forms.STAY_ON_LOCKED, false);
  ChangeForm(forms.NO_KERS, false);
  ChangeForm(forms.ERROR_RAISING_LEVEL, "1");
  ChangeForm(forms.SPEED_NORMAL_KMH, "33", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_EU, "27", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_DE, "23", true);
  ChangeForm(forms.CRUISE_CONTROL_NOBEEP, false);
  ChangeForm(forms.NO_BRAKE_LIGHT_FLASH, true);
  ChangeForm(forms.NO_OVERSPEED_ALARM, false);
  ChangeForm(forms.PATCH_ALL, true);
  ChangeForm(forms.REGION, "0");
  ChangeForm(forms.COMPAT_PATCHES, true);
  handleTheWorld();
}

function Preset_maxed() {
  ChangeForm(forms.VERSION, "DRV126");
  ChangeForm(forms.MOTOR_POWER_CONSTANT, "48000", true);
  ChangeForm(forms.CRUISE_CONTROL_DELAY, "5", false);
  ChangeForm(forms.VERSION_SPOOFING, true);
  ChangeForm(forms.THROTTLE_ALG, false);
  ChangeForm(forms.REMOVE_CHARGING_MODE, false);
  ChangeForm(forms.MOTOR_START_SPEED, "5", false);
  ChangeForm(forms.STAY_ON_LOCKED, true);
  ChangeForm(forms.NO_KERS, false);
  ChangeForm(forms.ERROR_RAISING_LEVEL, "1", true);
  ChangeForm(forms.SPEED_NORMAL_KMH, "39", true);
  ChangeForm(forms.SPEED_NORMAL_KMH_EU, "27", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_DE, "22", false);
  ChangeForm(forms.CRUISE_CONTROL_NOBEEP, false);
  ChangeForm(forms.NO_BRAKE_LIGHT_FLASH, false);
  ChangeForm(forms.NO_OVERSPEED_ALARM, false);
  ChangeForm(forms.PATCH_ALL, false);
  ChangeForm(forms.REGION, "1");
  ChangeForm(forms.COMPAT_PATCHES, true);
  handleTheWorld();
}

function Preset_shmax() {
  ChangeForm(forms.VERSION, "DRV126");
  ChangeForm(forms.MOTOR_POWER_CONSTANT, "35500", true);
  ChangeForm(forms.CRUISE_CONTROL_DELAY, "3", true);
  ChangeForm(forms.VERSION_SPOOFING, true);
  ChangeForm(forms.THROTTLE_ALG, true);
  ChangeForm(forms.MOTOR_START_SPEED, "0", true);
  ChangeForm(forms.REMOVE_CHARGING_MODE, false);
  ChangeForm(forms.STAY_ON_LOCKED, true);
  ChangeForm(forms.NO_KERS, false);
  ChangeForm(forms.ERROR_RAISING_LEVEL, "1", true);
  ChangeForm(forms.SPEED_NORMAL_KMH, "33", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_EU, "27", false);
  ChangeForm(forms.SPEED_NORMAL_KMH_DE, "22", false);
  ChangeForm(forms.CRUISE_CONTROL_NOBEEP, false);
  ChangeForm(forms.NO_BRAKE_LIGHT_FLASH, false);
  ChangeForm(forms.NO_OVERSPEED_ALARM, false);
  ChangeForm(forms.PATCH_ALL, false);
  ChangeForm(forms.REGION, "1");
  ChangeForm(forms.COMPAT_PATCHES, true);
  handleTheWorld();
}

function Share() {
  var url = location.protocol + '//' + location.host;
  var firstParam = true;

  function getSeparator() {
    if (firstParam) {
      firstParam = false;
      return '?';
    }

    return '&';
  }

  for (var i = 0; i < formValues.length; i++) {
    var form = formValues[i];

    var formValue = GetFormValue(form);
    var patchCheckbox = GetPatchCheckBox(form);

    if (patchCheckbox) {
      if (patchCheckbox.checked) {
        url += getSeparator() + form + '=' + formValue;
      }
    } else if (typeof formValue === 'boolean') {
      if (formValue) {
        url += getSeparator() + form + '=on';
      }
    } else {
        url += getSeparator() + form + '=' + formValue;
    }
  }

  var textArea = document.createElement("textarea");

  textArea.value = url;
  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  document.getElementById('shareConfirmation').innerText = 'Copied!';

  document.body.removeChild(textArea);
}

(function () {
  'use strict';

  /**
   * Toggles the disable state of the input associated to the checkbox
   *
   * @param {Event} event - Change event triggered when checkbox state changes
   */
  function toggleDisable(event) {
    const checkbox = event.target;
    const higherParent = checkbox.parentElement.parentElement;
    const relatedElement = higherParent.previousElementSibling;

    relatedElement.disabled = !relatedElement.disabled;
  }

  /**
   * Loads preset values into the form.
   *
   * @param {string} type - Preset to load
   */
function loadPreset(type) {
    switch(type) {
      case 'default':
        Preset_Default();
        updateVoltage(36);
        break;
      case 'maxed':
        Preset_maxed();
        updateVoltage(36);
        break;
      case 'shmax':
        Preset_shmax();
        updateVoltage(36);
        break;
      case 'rp':
        Preset_RollerPlausch();
        updateVoltage(36);
        break;
      case '48v':
        Preset_BatteryMod();
        updateVoltage(48);
        break;
      default:
        Preset_Default();
        updateVoltage(36);
        break;
    }
  }

    function updateVoltage(voltage) {
        default_voltage = voltage;
        resetCurrent();
        handleTheJoules(default_ampere*1000);
        if(voltage == 36) {
            document.getElementById("voltage").selectedIndex = 0;
            document.getElementById("voltage")[document.getElementById("voltage").selectedIndex].selected = true;
        } else {
            document.getElementById("voltage").selectedIndex = 1;
            document.getElementById("voltage")[document.getElementById("voltage").selectedIndex].selected = true;
        }
    }
  /**
   * Finds checkboxes responsible of enabling/disabling inputs and binds appropriated events on it.
   */
  function initPatchCheckboxes() {
    const patchCheckboxes = document.querySelectorAll('.patch-input');

    patchCheckboxes.forEach(checkbox => checkbox.addEventListener('change', toggleDisable));
  }

  /**
   * Finds buttons responsible of presets loading and binds appropriated events on it.
   */
  function initPresets() {
    document.querySelector('#preset--default').addEventListener('click', () => loadPreset('default'));
    document.querySelector('#preset--maxed').addEventListener('click', () => loadPreset('maxed'));
	document.querySelector('#preset--shmax').addEventListener('click', () => loadPreset('shmax'));
	document.querySelector('#preset--rp').addEventListener('click', () => loadPreset('rp'));
	document.querySelector('#preset--48v').addEventListener('click', () => loadPreset('48v'));
  }

  /**
   * Page initializer: initializes everything so that the page works properly.
   */
  function init() {
    initPatchCheckboxes();
    initPresets();
  }

  init();
}());