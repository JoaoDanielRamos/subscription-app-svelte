<script lang="ts">
	import classNames from 'classnames';

	export let text: string;
	export let styles: string | undefined = undefined;
</script>

<p class={classNames('mb-10 text-gray300', styles)}>
	{text}
</p>
