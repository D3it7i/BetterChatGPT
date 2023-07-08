import React from 'react';
import { Role } from '@type/chat';
import SettingIcon from '@icon/SettingIcon';
import PersonIcon from '@icon/PersonIcon';

const Avatar = React.memo(({ role }: { role: Role }) => {
  return (
    <div className='w-[30px] flex flex-col relative items-end'>
      {role === 'user' && <UserAvatar />}
      {role === 'assistant' && <AssistantAvatar />}
      {role === 'system' && <SystemAvatar />}
    </div>
  );
});

const UserAvatar = () => {
  return (
    <div>
      <img
      src='user.png'
      />
    </div>
  );
};

const AssistantAvatar = () => {
  return (
    <div>
      <img
      src='assistant.png'
      />
    </div>
  );
};

const SystemAvatar = () => {
  return (
    <div>
      <img
      src='system.png'
      />
    </div>
  );
};

export default Avatar;
