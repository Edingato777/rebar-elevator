import * as alt from 'alt-server';
import { useRebar } from '@Server/index.js';
import { MarkerType } from '../../../main/shared/types/marker.js';

const Rebar = useRebar();
const NotificationAPI = await Rebar.useApi().getAsync('ascended-notification-api');

const startPositions = [
    {
        x: -816.5462646484375,
        y: -692.5960693359375,
        z: 27.061500549316406
    },
    {
        x: -815.6712646484375,
        y: -683.4649658203125,
        z: 122.41971588134766
    },
];

const targetPosition = [
    {
        x: -815.5308837890625,
        y: -683.4581298828125,
        z: 123.41972351074219
    },
    {
        x: -816.5462646484375,
        y: -692.5960693359375,
        z: 27.061500549316406
    },
];

const interaction0 = Rebar.controllers.useInteraction(
    new alt.ColshapeCylinder(startPositions[0].x, startPositions[0].y, startPositions[0].z, 3, 3),
    'player',
);

function onStart0(player: alt.Player) {
    const rPlayer = Rebar.usePlayer(player);
    NotificationAPI.create(player, {
        icon: '✅',
        title: 'Aufzug startet...',
        subTitle: 'Es geht los!',
        message: 'Der Aufzug wurde gestartet.',
        duration: 5000,
    });

    player.pos = new alt.Vector3(targetPosition[0].x, targetPosition[0].y, targetPosition[0].z);
}

interaction0.on(onStart0);

Rebar.controllers.useTextLabelGlobal({ pos: new alt.Vector3(startPositions[0]).add(0, 0, 1), text: 'Drücke E' });
Rebar.controllers.useMarkerGlobal({
    pos: startPositions[0],
    color: new alt.RGBA(0, 50, 200, 255),
    scale: new alt.Vector3(2, 2, 1),
    type: MarkerType.FLAT_CIRCLE,
});

Rebar.controllers.useMarkerGlobal({
    pos: startPositions[1],
    color: new alt.RGBA(0, 50, 200, 255),
    scale: new alt.Vector3(2, 2, 1),
    type: MarkerType.FLAT_CIRCLE,
});

Rebar.controllers.useTextLabelGlobal({ pos: new alt.Vector3(startPositions[1]).add(0, 0, 1), text: 'Drücke E' });

const interaction1 = Rebar.controllers.useInteraction(
    new alt.ColshapeCylinder(startPositions[1].x, startPositions[1].y, startPositions[1].z, 3, 3),
    'player',
);

function onStart1(player: alt.Player) {
    const rPlayer = Rebar.usePlayer(player);
    NotificationAPI.create(player, {
        icon: '✅',
        title: 'Aufzug startet...',
        subTitle: 'Es geht los!',
        message: 'Der Aufzug wurde gestartet.',
        duration: 5000,
    });

    player.pos = new alt.Vector3(targetPosition[1].x, targetPosition[1].y, targetPosition[1].z);
}

interaction1.on(onStart1);