'use strict';

var spawn = require('pty.js').spawn,
	ParentCommand = require('./base').Command,
	inherits = require('util').inherits,
	_ = require('underscore');

function Command(params) {
	params = params || {};
	ParentCommand.call(this, params);
	this.cwd = params.cwd;
}

exports.Command = Command;

inherits(Command, ParentCommand);

/**
 * Executes `params.cmd` with `params.args` and `params.options`
 */
Command.prototype.run = function(params, callback) {
	var self = this,
		stdout = self.collectOut ? '' : null,
		stderr = self.attachStderr ? '' : null;

	if (!params.cmd) return callback(new Error('`cmd` is not set'));
	if (!params.args) return callback(new Error('`args` is not set'));
	params.options = params.options || {};
	params.options.cwd = params.options.cwd || this.cwd;

	params.options.name = 'xterm-color';
	params.options.cols = 80;
	params.options.rows = 30;

	console.log(params);

	var cmd = spawn(params.cmd, params.args, params.options);

	if (self.emitIn) {
		self.emit('stdin', params.cmd + ' ' + params.args.join(' ') + '\n');
	}

	cmd.on('data', function(data) {
		if (self.emitOut) self.emit('stdout', data);
		if (self.collectOut) stdout += data;
	});

	cmd.on('exit', function(code) {
		var err = null;
		if (code !== 0) {
			err = new Error('Spawned command exits with non-zero code: ' + code);
			err.stderr = stderr;
		}
		callback(err, stdout);
	});

	return cmd;
};
