import * as React from 'react';
import {Realm} from '../../common/types';
import * as cls from '../../constants/classes';
import {ICONS} from '../../constants';
import './chooser.scss';
import {useDispatch} from 'react-redux';

interface ClassChooserProps {
  realm: Realm;
  onClassButtonClicked: (c: cls.Class) => () => void;
}

const ClassChooser = ({realm, onClassButtonClicked}: ClassChooserProps) => {
  switch (realm) {
    case Realm.Albion: {
      return (
        <div>
          <button
            data-icon={ICONS.Armsman}
            onClick={onClassButtonClicked(cls.Armsman)}
          >
            {cls.Armsman.name}
          </button>
          <button
            data-icon={ICONS.Cabalist}
            onClick={onClassButtonClicked(cls.Cabalist)}
          >
            {cls.Cabalist.name}
          </button>
          <button
            data-icon={ICONS.Cleric}
            onClick={onClassButtonClicked(cls.Cleric)}
          >
            {cls.Cleric.name}
          </button>
          <button
            data-icon={ICONS.Friar}
            onClick={onClassButtonClicked(cls.Friar)}
          >
            {cls.Friar.name}
          </button>
          <button
            data-icon={ICONS.Infiltrator}
            onClick={onClassButtonClicked(cls.Infiltrator)}
          >
            {cls.Infiltrator.name}
          </button>
          <button
            data-icon={ICONS.Mercenary}
            onClick={onClassButtonClicked(cls.Mercenary)}
          >
            {cls.Mercenary.name}
          </button>
          <button
            data-icon={ICONS.Minstrel}
            onClick={onClassButtonClicked(cls.Minstrel)}
          >
            {cls.Minstrel.name}
          </button>
          <button
            data-icon={ICONS.Necromancer}
            onClick={onClassButtonClicked(cls.Necromancer)}
          >
            {cls.Necromancer.name}
          </button>
          <button
            data-icon={ICONS.Paladin}
            onClick={onClassButtonClicked(cls.Paladin)}
          >
            {cls.Paladin.name}
          </button>
          <button
            data-icon={ICONS.Reaver}
            onClick={onClassButtonClicked(cls.Reaver)}
          >
            {cls.Reaver.name}
          </button>
          <button
            data-icon={ICONS.Scout}
            onClick={onClassButtonClicked(cls.Scout)}
          >
            {cls.Scout.name}
          </button>
          <button
            data-icon={ICONS.Sorcerer}
            onClick={onClassButtonClicked(cls.Sorcerer)}
          >
            {cls.Sorcerer.name}
          </button>
          <button
            data-icon={ICONS.Theurgist}
            onClick={onClassButtonClicked(cls.Theurgist)}
          >
            {cls.Theurgist.name}
          </button>
          <button
            data-icon={ICONS.Wizard}
            onClick={onClassButtonClicked(cls.Wizard)}
          >
            {cls.Wizard.name}
          </button>
        </div>
      );
    }
    case Realm.Hibernia: {
      return (
        <div>
          <button
            data-icon={ICONS.Animist}
            onClick={onClassButtonClicked(cls.Animist)}
          >
            {cls.Animist.name}
          </button>
          <button
            data-icon={ICONS.Bard}
            onClick={onClassButtonClicked(cls.Bard)}
          >
            {cls.Bard.name}
          </button>
          <button
            data-icon={ICONS.Blademaster}
            onClick={onClassButtonClicked(cls.Blademaster)}
          >
            {cls.Blademaster.name}
          </button>
          <button
            data-icon={ICONS.Champion}
            onClick={onClassButtonClicked(cls.Champion)}
          >
            {cls.Champion.name}
          </button>
          <button
            data-icon={ICONS.Druid}
            onClick={onClassButtonClicked(cls.Druid)}
          >
            {cls.Druid.name}
          </button>
          <button
            data-icon={ICONS.Eldritch}
            onClick={onClassButtonClicked(cls.Eldritch)}
          >
            {cls.Eldritch.name}
          </button>
          <button
            data-icon={ICONS.Enchanter}
            onClick={onClassButtonClicked(cls.Enchanter)}
          >
            {cls.Enchanter.name}
          </button>
          <button
            data-icon={ICONS.Hero}
            onClick={onClassButtonClicked(cls.Hero)}
          >
            {cls.Hero.name}
          </button>
          <button
            data-icon={ICONS.Mentalist}
            onClick={onClassButtonClicked(cls.Mentalist)}
          >
            {cls.Mentalist.name}
          </button>
          <button
            data-icon={ICONS.Nightshade}
            onClick={onClassButtonClicked(cls.Nightshade)}
          >
            {cls.Nightshade.name}
          </button>
          <button
            data-icon={ICONS.Ranger}
            onClick={onClassButtonClicked(cls.Ranger)}
          >
            {cls.Ranger.name}
          </button>
          <button
            data-icon={ICONS.Valewalker}
            onClick={onClassButtonClicked(cls.Valewalker)}
          >
            {cls.Valewalker.name}
          </button>
          <button
            data-icon={ICONS.Warden}
            onClick={onClassButtonClicked(cls.Warden)}
          >
            {cls.Warden.name}
          </button>
        </div>
      );
    }
    case Realm.Midgard: {
      return (
        <div>
          <button
            data-icon={ICONS.Berserker}
            onClick={onClassButtonClicked(cls.Berserker)}
          >
            {cls.Berserker.name}
          </button>
          <button
            data-icon={ICONS.Bonedancer}
            onClick={onClassButtonClicked(cls.Bonedancer)}
          >
            {cls.Bonedancer.name}
          </button>
          <button
            data-icon={ICONS.Healer}
            onClick={onClassButtonClicked(cls.Healer)}
          >
            {cls.Healer.name}
          </button>
          <button
            data-icon={ICONS.Hunter}
            onClick={onClassButtonClicked(cls.Hunter)}
          >
            {cls.Hunter.name}
          </button>
          <button
            data-icon={ICONS.Runemaster}
            onClick={onClassButtonClicked(cls.Runemaster)}
          >
            {cls.Runemaster.name}
          </button>
          <button
            data-icon={ICONS.Savage}
            onClick={onClassButtonClicked(cls.Savage)}
          >
            {cls.Savage.name}
          </button>
          <button
            data-icon={ICONS.Shadowblade}
            onClick={onClassButtonClicked(cls.Shadowblade)}
          >
            {cls.Shadowblade.name}
          </button>
          <button
            data-icon={ICONS.Shaman}
            onClick={onClassButtonClicked(cls.Shaman)}
          >
            {cls.Shaman.name}
          </button>
          <button
            data-icon={ICONS.Skald}
            onClick={onClassButtonClicked(cls.Skald)}
          >
            {cls.Skald.name}
          </button>
          <button
            data-icon={ICONS.Spiritmaster}
            onClick={onClassButtonClicked(cls.Spiritmaster)}
          >
            {cls.Spiritmaster.name}
          </button>
          <button
            data-icon={ICONS.Thane}
            onClick={onClassButtonClicked(cls.Thane)}
          >
            {cls.Thane.name}
          </button>
          <button
            data-icon={ICONS.Warrior}
            onClick={onClassButtonClicked(cls.Warrior)}
          >
            {cls.Warrior.name}
          </button>
        </div>
      );
    }
  }

  return null;
};

const Chooser: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [realm, setRealm] = React.useState<Realm | undefined>(undefined);

  const onRealmButtonClicked = (realm: Realm | undefined) => {
    return (): void => {
      setRealm(realm);
    };
  };

  const onClassButtonClicked = (c: cls.Class) => {
    return (): void => {
      console.log(c.name);
    };
  };

  return (
    <div>
      {realm === undefined ? (
        <>
          <button
            data-icon={ICONS.Albion}
            onClick={onRealmButtonClicked(Realm.Albion)}
          >
            {Realm.Albion}
          </button>
          <button
            data-icon={ICONS.Hibernia}
            onClick={onRealmButtonClicked(Realm.Hibernia)}
          >
            {Realm.Hibernia}
          </button>
          <button
            data-icon={ICONS.Midgard}
            onClick={onRealmButtonClicked(Realm.Midgard)}
          >
            {Realm.Midgard}
          </button>
        </>
      ) : (
        <>
          {realm === Realm.Albion} &&{' '}
          <button
            data-icon={ICONS.Albion}
            onClick={onRealmButtonClicked(undefined)}
          >
            {realm}
          </button>
          {realm === Realm.Hibernia} &&{' '}
          <button
            data-icon={ICONS.Hibernia}
            onClick={onRealmButtonClicked(undefined)}
          >
            {realm}
          </button>
          {realm === Realm.Midgard} &&{' '}
          <button
            data-icon={ICONS.Midgard}
            onClick={onRealmButtonClicked(undefined)}
          >
            {realm}
          </button>
          <ClassChooser
            realm={realm}
            onClassButtonClicked={onClassButtonClicked}
          />
        </>
      )}
    </div>
  );
};

export default Chooser;
