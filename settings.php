<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Tiny accordion settings file.
 *
 * @package     tiny_accordion
 * @copyright   2026 Catalyst IT Australia
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

if ($hassiteconfig) {
    $settings = new admin_settingpage(
        'tiny_accordion_settings',
        new lang_string('pluginname', 'tiny_accordion')
    );

    if ($ADMIN->fulltree) {
        $settings->add(new admin_setting_configcheckbox(
            'tiny_accordion/showtoolbaricons',
            new lang_string('settings_showtoolbaricons', 'tiny_accordion'),
            new lang_string('settings_showtoolbaricons_desc', 'tiny_accordion'),
            1
        ));
    }
}
