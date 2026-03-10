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
 * Tiny accordion configuration.
 *
 * @module      tiny_accordion/configuration
 * @copyright   2026 Catalyst IT Australia
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {addToolbarButton, addMenubarItem} from 'editor_tiny/utils';
import {getInitialPluginConfiguration, getPluginOptionName} from 'editor_tiny/options';
import {pluginName} from './common';

// These are native TinyMCE 6 accordion button names.
const accordionButton = 'accordion';
const accordionRemoveButton = 'accordionremove';

/**
 * Whether the accordion toolbar icons should be shown.
 *
 * @param {Object} options The editor options
 * @returns {boolean}
 */
const showToolbarIcons = (options) => {
    const optionName = getPluginOptionName(pluginName, 'showtoolbaricons');
    const config = getInitialPluginConfiguration(options);
    return config[optionName] ?? true;
};

export const configure = (instanceConfig, options) => {
    if (!instanceConfig) {
        return {};
    }

    const pluginsConfig = {
        plugins: `${instanceConfig.plugins} accordion`,
        // eslint-disable-next-line camelcase
        details_initial_state: 'expanded',
        // eslint-disable-next-line camelcase
        details_serialized_state: 'collapsed',
        menu: addMenubarItem(instanceConfig.menu, 'insert', `${accordionButton} ${accordionRemoveButton}`),
    };

    // Only add toolbar icons if enabled in settings.
    if (showToolbarIcons(options)) {
        pluginsConfig.toolbar = addToolbarButton(
            addToolbarButton(instanceConfig.toolbar, 'content', accordionButton),
            'content', accordionRemoveButton
        );
    }

    return pluginsConfig;
};